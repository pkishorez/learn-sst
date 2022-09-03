import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { onError } from "../../lib/error";

export const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    API.get("notes", "/notes").then(setNotes).catch(onError);
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <div className="mt-4">
        {notes.map(({ noteId, attachment, content }) => (
          <div
            key={noteId}
            className="p-3 mt-2 bg-gray-100 flex justify-between"
          >
            <span>{content}</span>
            <span>{attachment}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
