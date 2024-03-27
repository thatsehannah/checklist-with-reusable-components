import { Checklist } from './Checklist';

function App() {
  return (
    <div className='p-10'>
      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 3, name: 'Bill', role: 'Developer' },
          { id: 4, name: 'Tara', role: 'UX' },
          { id: 5, name: 'Elliot', role: 'Developer' },
          { id: 6, name: 'Derik', role: 'QA' },
        ]}
        id='id'
        primary='name'
        secondary='role'
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      />
    </div>
  );
}

export default App;
