import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://619146a141928b001768ffd0.mockapi.io/api/v1/";

export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async () => {
    fetchContact.pending();

    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      fetchContact.rejected(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async ({ name, number }) => {
    const newContact = {
      name,
      number,
    };

    const response = await axios.post("/contacts", newContact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
