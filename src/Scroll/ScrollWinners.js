export default function ScrollWinners (event) {
    event.preventDefault();
    document.getElementById('winners').scrollIntoView({ behavior: 'smooth' });

}