import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar currentQuestion={1} totalQuestions={20} correct={5} incorrect={2} />,
    isSnippet: true,
});
