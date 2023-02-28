document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let square = Array.from(document.querySelectorAll('.grid div'));
    let square1 = document.querySelectorAll('.grid div');
    const startBt = document.querySelector('#start-button');
    const scoreDisplay = document.querySelector('#score');
    const width = 10;
   
    const lTetromino = [
        [ 1 , width + 1,width * 2 + 1, 2 ],
        [ width , width + 1 , width + 2 , width * 2 + 2 ],
        [ 1 ,width + 1 , width * 2 + 1 , width * 2 ],
        [ ]
    ];
});