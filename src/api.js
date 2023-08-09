// Base URL
// const base_url=`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}`;
const base_url="https://api.rawg.io/api/";
const key = "key=be3a7a22de5047ea8970cbf8b03f50de";

// Getting the month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}
// Getting the day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}games?${key}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}games?${key}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}games?${key}${newGames}`;

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&${key}`;

// Game Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&${key}`;

// Search Game

export const searchGameURL = (game_name) => `${base_url}games?${key}&search=${game_name}&page_size=9`;