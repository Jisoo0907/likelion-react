const ENDPOINT = 'http://127.0.0.1:8090';
const REQUEST_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// 1. 비동기 함수 작성
/* --------------------------------- Create --------------------------------- */
export async function createNote(newNote) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records`;

  const body = JSON.stringify({
    title: newNote.title,
    description: newNote.description,
  });

  const response = await fetch(REQUEST_URL, {
    method: 'POST',
    body,
    ...REQUEST_OPTIONS,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다. ' }),
      { status: 500 }
    );
  }

  const responseData = await response.json();

  return responseData;
}

/* ---------------------------------- Read ---------------------------------- */
export async function readNotes(page = 1, perPage = 10) {
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records?page=${page}&perPage=${perPage}`;
  const response = await fetch(REQUEST_URL);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }
    );
  }
  const responseData = await response.json();

  return responseData;
}

/* -------------------------------- Read One -------------------------------- */
export async function readNoteOne() {}

export async function updateNote() {}

export async function deleteNote() {}
