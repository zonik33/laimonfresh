export default function ScrollPrizes (event) {
    event.preventDefault();
    document.getElementById('how-prizes').scrollIntoView({ behavior: 'smooth' });

}