import { universityArticles, artsAndCultureArticles, spectrumArticles, sportsArticles, opinionArticles, audioArticles} from '../data/articles';
export const sections = [
	{
        title: "University",
        url: "university-news",
		articles: universityArticles
    },
    {
        title: "Sports",
        url: "sports",
		articles: sportsArticles
    },
    {
        title: "Opinion",
        url: "opinion",
		articles: opinionArticles
    },
	{
        title: "Spectrum",
        url: "spectrum",
		articles: spectrumArticles
    },
	{
        title: "A&C",
        url: "a&c",
		articles: artsAndCultureArticles
    },
    {
        title: "Audio",
        url: "audio",
		articles: audioArticles
    }
];