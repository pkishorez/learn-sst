import { useRef, useState } from "react";
import { API } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { s3Upload } from "../../lib/aws-lib";
import { onError } from "../../lib/error";

export const NewNote = () => {
  const [content, setContent] = useState("");
  const file = useRef(null);

  const nav = useNavigate();

  const handleFileChange = (event) => {
    file.current = event.target.files[0];
  };

  return (
    <div>
      <h1>New Note</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const attachment = file.current
              ? await s3Upload(file.current)
              : null;
            await API.post("notes", "/notes", {
              body: { content, attachment },
            });
            nav("/notes/list");
          } catch (err) {
            onError(err);
          }
        }}
        className="flex flex-col items-stretch gap-y-3 mt-4"
      >
        <label>
          <div>Content</div>
          <textarea
            autoFocus
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 w-full p-4 mt-2 box-border"
          />
        </label>
        <label>
          <input type="file" ref={file} onChange={handleFileChange} />
        </label>
        <button className="border-2 w-full p-2 mt-2" type="submit">
          Create Note
        </button>
      </form>
    </div>
  );
};
