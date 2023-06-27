import React from 'react';
import {
    Text,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    HStack,
} from '@chakra-ui/react';
import { useState } from 'react';

//import '@fontsource/poppins/300.css';
//import '@fontsource/poppins/400.css';
//import '@fontsource/poppins/500.css';


function Square({ onClick, value }) {
    return (
        <Button width="50pt" height="50pt" onClick={onClick}>{value}</Button>
    )
}

function Board({ squares, userIcon, userIconHistory, setUserIconHistory, history, setHistory, move, setMove }) {
    const winner = hasWinner();


    function hasWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && (squares[a] === squares[b]) && (squares[b] === squares[c])) {
                return true;
            }
        }
        return false;
    }

    function onClick(idx) {
        if (!squares[idx] && !hasWinner()) {
            const newSquares = squares.slice();
            newSquares[idx] = userIcon;
            const newMove = move + 1;
            setHistory([...history.slice(0, newMove), newSquares]);
            setUserIconHistory([...userIconHistory, userIcon === "O" ? "X" : "O"]);
            setMove(newMove);
        }
        else {
            console.log("Value already set or someone won!");
        }
    }

    function StatusText() {
        return (
            (winner && <Heading>{userIcon === "O" ? "X" : "O"} Won!</Heading>) ||
            <Heading>{userIcon} up Next!</Heading>
        );
    }
    return (
        <VStack>
            <StatusText />
            <SimpleGrid columns={3}>
                {
                    squares.map((token, idx) => <Square
                        key={idx}
                        onClick={() => onClick(idx)}
                        value={token}
                    />)
                }
            </SimpleGrid>

        </VStack>
    )
}

function HistoryBacktrack({ history, setMove }) {
    function revert(idx) {
        // console.log(history.slice(0, idx));
        setMove(idx);
    }

    return (
        <VStack align="left">
            <Heading> Want to undo? </Heading>
            {history.map((_, idx) =>
                <HStack key={idx}>
                    <Text>{idx}. </Text>
                    <Button onClick={() => revert(idx)}>Go To {idx - 1 >= 0 ? `Move ${idx}` : "start"}</Button>
                </HStack>
            )
            }
        </VStack>
    );

}

function TicTacToeApp() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [userIconHistory, setUserIconHistory] = useState(["O"]);
    const [move, setMove] = useState(0);
    const squares = history[move];
    const userIcon = userIconHistory[move];


    return (
        <HStack align="baseline" spacing="50pt" padding="3%">
            <Board squares={squares}
                userIcon={userIcon}
                userIconHistory={userIconHistory}
                setUserIconHistory={setUserIconHistory}
                history={history}
                setHistory={setHistory}
                move={move}
                setMove={setMove} />
            <HistoryBacktrack history={history} setMove={setMove} />
        </HStack>
    );
}

export default TicTacToeApp;