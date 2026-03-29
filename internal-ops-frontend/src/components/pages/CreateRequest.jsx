import { useState } from "react";
import api from "../api/client";
import { validateRequest } from "../security/validation";
import { canCallAPI } from "../security/rateLimit";

export default function CreateRequest() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    const data = { type, description };

    if (!validateRequest(data)) {
      alert("Invalid input");
      return;
    }

    if (!canCallAPI()) {
      alert("Too many requests");
      return;
    }

    try {
      await api.post("/requests", data);
      alert("Request submitted");
    } catch {
      alert("Server error");
    }
  };

  return (
    <div>
      <h2>Create Request</h2>
      <input onChange={e => setType(e.target.value)} />
      <textarea onChange={e => setDescription(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
