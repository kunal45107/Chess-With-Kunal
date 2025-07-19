let piece;

document.querySelectorAll('[draggable]').forEach(pieceElement => 
    pieceElement.ondragstart = () => piece = pieceElement
);

document.querySelectorAll('.white-square, .black-square').forEach(square => 
    square.ondragover = square.ondrop = event => {
        event.preventDefault();
        if (event.type === 'drop') {
            const oldPiece = square.querySelector('img.chess_pieces');
            if (oldPiece) oldPiece.remove();
        }
        square.appendChild(piece);
    }
);