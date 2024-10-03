import React from "react";
import { useForm } from "@mantine/form";
import { Center, Stack, Button, Textarea, Select, MultiSelect } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import EmojiRating from "./emojiRating";
import ListPeople from "../../../people/addPerson/listPeople";
import useAuthStore from "../../../auth/store";

const FormNotes = ({ note }) => {
  const queryClient = useQueryClient();
  let dateValue = note?.date ? new Date(note.date) : new Date();
  const { token } = useAuthStore();

  const lifeAspects = [
    "Spiritual",
    "Personnal-growth / Self Improvement",
    "Fitness",
    "Health",
    "Family",
    "Career",
    "Social",
    "Leisure",
    "Life Management",
    "Love PartnerShip",
  ];

  const form = useForm({
    initialValues: {
      note: note?.note ?? "",
      date: dateValue,
      rating: note?.rating ?? 0,
      lifeAspect: note?.lifeAspect ?? [],
      people: note?.people ?? [],
    },
  });

  const createNoteMutation = useMutation({
    mutationFn: (values) =>
      axios.post(
        "http://localhost:8000/api/notes",

        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["ListNotes"]);
      // Réinitialiser le formulaire au lieu de le fermer
      form.reset();
    },
    onError: (error) => {
      console.error("Failed to create note:", error);
    },
  });

  const updateNoteMutation = useMutation({
    mutationFn: (values) =>
      axios.put(
        `http://localhost:8000/api/notes/${note._id}`,
        { ...values, token }, 
        {
          params: { token }, 
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["ListNotes"]);
      // Ne pas fermer le modal, peut-être afficher un message de succès à la place
    },
    onError: (error) => {
      console.error("Failed to update note:", error);
    },
  });

  const handleSubmit = (values) => {
    if (note) {
      updateNoteMutation.mutate(values);
    } else {
      createNoteMutation.mutate(values);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Center>
        <Stack w="100%">
          <Textarea label="Note" {...form.getInputProps("note")} />
          <DateInput label="Date" {...form.getInputProps("date")} />

          <MultiSelect
            label="Life Aspects"
            placeholder="Select life aspects"
            data={lifeAspects}
            {...form.getInputProps("lifeAspect")}
          />
          <ListPeople form={form} />
          <Center>
            <EmojiRating
              value={form.values.rating}
              onChange={(value) => form.setFieldValue("rating", value)}
            />
          </Center>
          <Button
            type="submit"
            loading={
              createNoteMutation.isLoading || updateNoteMutation.isLoading
            }
          >
            {note ? "Update" : "Submit"}
          </Button>
        </Stack>
      </Center>
    </form>
  );
};

export default FormNotes;
