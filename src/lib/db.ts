import {Redis} from '@upstash/redis';



export const db = new Redis({
    url: 'https://eu1-funny-husky-40408.upstash.io',
    token: 'AZ3YASQgYTI5NTM0NzktYzg3Ny00ODdlLTkzODItNjE1NGUzYTNjZjE4NjIxNjM5OWYwYzFlNGIyM2FkM2Q1YjM1OGRmMmY5ZDE='
});