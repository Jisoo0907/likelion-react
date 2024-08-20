import { createNote, readNotes } from '@/api/notes';
import S from './DataMutation.module.css';

function DataMutation() {
  const handleCreate = async () => {
    const newNote = {
      title: '리액트 마지막 학습',
      description: '리액트의 마지막 학습 주제는 과연?',
    };

    const responseData = await createNote(newNote);
    console.log(responseData);
  };

  const handleReadNotes = async () => {
    const responseData = await readNotes();
    console.log(responseData);
  };
  return (
    <div className={S.component}>
      <form>
        <div>
          <label htmlFor="noteTitle">제목</label>
          <input type="text" id="noteTitle" name="title" />
        </div>
        <div>
          <label htmlFor="noteDescription">내용</label>
          <textarea
            name="description"
            id="noteDescription"
            rows={3} // 세로
            cols={20}
          ></textarea>
        </div>
      </form>
      <div role="group" style={{ display: 'flex', gap: 8 }}></div>
      <button type="button" onClick={handleCreate}>
        노트 작성
      </button>
      <button type="button" onClick={handleReadNotes}>
        노트 읽기
      </button>
    </div>
  );
}

export default DataMutation;
