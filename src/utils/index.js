import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    const link = document.createElement('a');
    link.href = photo;
    link.download = `download-${_id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}