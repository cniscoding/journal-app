import React from 'react';
import { Button } from '../ui/button';
import { deleteJournalEntry } from '@/app/api/journalEntries';

interface DeleteButtonProps {
  entryId: string | number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ entryId }) => {
  const handleClick = async () => {
    try {
      await deleteJournalEntry(entryId);
      console.log('clicked at least??')
    } catch (error) {
      console.error('Error deleting journal entry:', error);
    }
  };

  return (
    <Button onClick={handleClick}>X</Button>
  );
};

export default DeleteButton;