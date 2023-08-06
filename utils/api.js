import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODE3NTcyZjY0Njc3ZGRjOWU4NzNhMjc1YjRmMzFlMiIsInN1YiI6IjY0YTU5ODA0NWE5OTE1MDBjNjA0MGJlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.31vYPfH79ub9c-L1q3T23mzlkPBH2qte-kVqFWjiu7k';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
