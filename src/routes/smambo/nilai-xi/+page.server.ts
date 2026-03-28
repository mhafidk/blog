import { redirect } from '@sveltejs/kit';

export function load() {
    throw redirect(307, 'https://docs.google.com/spreadsheets/d/11RXedJJjALaP9M-CNXphd5rHNsqZ6n12KaluOVzAfvE/edit?usp=sharing');
}