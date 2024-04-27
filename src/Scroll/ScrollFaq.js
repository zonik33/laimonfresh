export default function ScrollFaq (event) {
    event.preventDefault();
    document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });

}