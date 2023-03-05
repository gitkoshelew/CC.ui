type IPogressResult = {
  type: string;
  answer: string[];
  correctAnswer: string[];
};

export const progressResult = ({
  type,
  answer,
  correctAnswer,
}: // eslint-disable-next-line consistent-return
IPogressResult) => {
  switch (type) {
    case 'multi': {
      if (
        [...answer].sort().join('').toLowerCase() ===
        [...correctAnswer].sort().join('').toLowerCase()
      ) {
        return 'right';
      }
      if (
        answer.length > 0 &&
        answer.sort().join('').toLowerCase() !==
          [...correctAnswer].sort().join('').toLowerCase()
      ) {
        return 'error';
      }
      if (answer.length === 0) {
        return 'default';
      }
      break;
    }
    case 'single': {
      if (answer.join().toLowerCase() === correctAnswer.join().toLowerCase()) {
        return 'right';
      }
      if (
        answer.length > 0 &&
        answer.join().toLowerCase() !== correctAnswer.join().toLowerCase()
      ) {
        return 'error';
      }
      if (answer.length === 0) {
        return 'default';
      }
      break;
    }
    default:
      return 'default';
  }
};
