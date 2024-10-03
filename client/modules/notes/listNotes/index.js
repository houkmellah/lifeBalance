import React, { useState, useMemo } from "react";
import {
  Table,
  Group,
  Tooltip,
  Avatar,
  Pagination,
  Center,
  Stack,
  Badge,
  Loader,
  Paper,
} from "@mantine/core";
import {
  HiMiniChevronUpDown,
  HiMiniChevronDown,
  HiMiniChevronUp,
} from "react-icons/hi2";
import { GetFullIcon } from "../../getFullIcon";
import { format } from "date-fns";
import axios from "axios";
import DeleteNote from "../deleteNote";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../auth/store";
import usePeopleStore from "../../people/addPerson/store/usePeopleStore";
import {
  IconHeart,
  IconBrain,
  IconBarbell,
  IconStethoscope,
  IconUsers,
  IconBriefcase,
  IconFriends,
  IconBeach,
  IconClipboardList,
  IconHeartHandshake,
} from "@tabler/icons-react";
import UpdateNote from "../updateNote";
import getInitials from "../../utils/getInitials";
import EmptyList from "../../ui/emptyList";
import { fetchPeople } from "../../people/api/fetchPeople";

const lifeAspects = [
  { value: "Spiritual", color: "yellow", icon: IconHeart },
  {
    value: "Personnal-growth / Self Improvement",
    color: "cyan",
    icon: IconBrain,
  },
  { value: "Fitness", color: "orange", icon: IconBarbell },
  { value: "Health", color: "green", icon: IconStethoscope },
  { value: "Family", color: "pink", icon: IconUsers },
  { value: "Career", color: "grape", icon: IconBriefcase },
  { value: "Social", color: "purple", icon: IconFriends },
  { value: "Leisure", color: "orange", icon: IconBeach },
  { value: "Life Management", color: "indigo", icon: IconClipboardList },
  { value: "Love PartnerShip", color: "red", icon: IconHeartHandshake },
];

const LifeAspectBadge = ({ aspect }) => {
  const aspectInfo = lifeAspects.find((a) => a.value === aspect);
  if (!aspectInfo) return null;

  const Icon = aspectInfo.icon;
  return (
    <Badge
      variant="filled"
      color={aspectInfo.color}
      leftSection={<Icon size={19} />}
      fz={12}
      size="lg"
    >
      {aspectInfo.value}
    </Badge>
  );
};

const ListNotes = () => {
  const [notification, setNotification] = useState(null);
  const { token, userId } = useAuthStore((state) => ({
    token: state.token,
    userId: state.user?.id,
  }));

  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "descending",
  });
let people

  const { people: peopleFromStore , setPeople } = usePeopleStore();
  const {
    data: peopleFromQuery = [],
    isError: isPeopleError,
    isLoading: isPeopleLoading,
  } = useQuery({
    queryKey: ["people", userId],
    queryFn: () => fetchPeople(token),
    enabled: !!peopleFromStore && !!token,
    onSuccess: (data) => setPeople(data),
  });

  people = peopleFromStore && peopleFromQuery
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;

  const fetchNotes = async () => {
    try {
      console.log("Token ======>", token);
      const { data } = await axios.get(`http://localhost:8000/api/notes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch notes");
    }
  };

  const {
    data: notes = [],
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ListNotes", userId], // Use userId in queryKey instead of token
    queryFn: fetchNotes,

    enabled: !!userId && !!token, // Only run query if both userId and token exist
  });

  const sortedNotes = useMemo(() => {
    let sortedData = [...notes];
    if (sortConfig.key) {
      sortedData.sort((a, b) => {
        if (sortConfig.key === "date") {
          return sortConfig.direction === "ascending"
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        }
        if (sortConfig.key === "lifeAspect") {
          // Sort by the first life aspect in the array
          const aAspect = a.lifeAspect[0] || '';
          const bAspect = b.lifeAspect[0] || '';
          return sortConfig.direction === "ascending"
            ? aAspect.localeCompare(bAspect)
            : bAspect.localeCompare(aAspect);
        }
        // ... rest of the sorting logic ...
      });
    }
    return sortedData;
  }, [notes, sortConfig]);

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = sortedNotes.slice(indexOfFirstNote, indexOfLastNote);

  const onSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    }));
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? (
        <HiMiniChevronDown />
      ) : (
        <HiMiniChevronUp />
      );
    }
    return <HiMiniChevronUpDown />;
  };

  if (isLoading) {
    return (
      <Paper
        h="90vh"
        w="100%"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        bg="transparent"
      >
        <Center>
          <Loader color="blue" size="xl" type="bars" />
        </Center>
      </Paper>
    );
  }
  if (isError) return <div>Error fetching notes</div>;

  if (notes.length === 0)
    return (
      <EmptyList
        title={"Your Notebook is Empty"}
        message={
          "It looks like you haven't created any notes yet. Why not start your journey now?"
        }
      />
    );

  return (
    <>
      <Stack justify="space-between" h={"85vh"}>
        {sortedNotes.length > 0 && (
          <>
            <Table bg="white" withTableBorder>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w="40%">Note</Table.Th>
                  <Table.Th onClick={() => onSort("date")}>
                    Date {renderSortIcon("date")}
                  </Table.Th>
                  <Table.Th onClick={() => onSort("rating")}>
                    Rating {renderSortIcon("rating")}
                  </Table.Th>
                  <Table.Th onClick={() => onSort("lifeAspect")}>
                    Life Aspect {renderSortIcon("lifeAspect")}
                  </Table.Th>
                  <Table.Th>People</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {currentNotes.map((note) => (
                  <Table.Tr key={note._id}>
                    <Table.Td>{note.note}</Table.Td>
                    <Table.Td visibleFrom="md">
                      {format(new Date(note.date), "eeee dd MMM")}
                    </Table.Td>
                    <Table.Td hiddenFrom="md">
                      {format(new Date(note.date), "dd/MM")}
                    </Table.Td>
                  
                    <Table.Td>
                      {note.rating > 0 && <GetFullIcon value={note.rating} />}
                    </Table.Td>
                    <Table.Td>
                      <LifeAspectBadges aspects={note.lifeAspect} />
                    </Table.Td>
                    <Table.Td>
                      <Avatar.Group spacing="sm">
                        {note?.people?.map((personId) => {
                          const person = people.find((p) => p._id === personId);
                          return person ? (
                            <Tooltip
                              key={personId}
                              label={`${person?.firstName} ${person?.secondName} ${person?.nickName}`}
                              withArrow
                            >
                              <Avatar radius="xl">
                                {getInitials(
                                  `${person?.firstName || ""} ${
                                    person?.secondName || ""
                                  }`
                                )}
                              </Avatar>
                            </Tooltip>
                          ) : null;
                        })}
                      </Avatar.Group>
                    </Table.Td>
                    <Table.Td>
                      <Group gap="xs" justify="end">
                        <UpdateNote note={note} />
                        <DeleteNote
                          id={note._id}
                          notification={notification}
                          setNotification={setNotification}
                          refetch={refetch}
                        />
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
            <Center mt="md">
              <Pagination
                total={Math.ceil(sortedNotes.length / notesPerPage)}
                value={currentPage}
                onChange={setCurrentPage}
              />
            </Center>
          </>
        )}
      </Stack>
    </>
  );
};

const LifeAspectBadges = ({ aspects }) => {
  return (
    <Group gap="xs">
      {aspects.map((aspect, index) => (
        <LifeAspectBadge key={index} aspect={aspect} />
      ))}
    </Group>
  );
};

export default ListNotes;
