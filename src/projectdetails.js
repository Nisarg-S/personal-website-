
import SortingThumbnail from "./assets/Sorting_Thumb.png"
import StockThumbnail from "./assets/stock_thumb.jpg"
import FootprintThumbnail from "./assets/footprint_thumb.png"


let projectDetails = [
    {
        title: 'Sorting Algorithm Visualizer',
        image: SortingThumbnail,
        shortDescription: 'Flask App to help beginner programmers visual simple and complex sorting algorithms',
        longDescription: 'The Sorting Algorithm Visualizer is a web app written in vanilla JavaScript and served with Flask, it is meant to help a useful aid to help programmers visualize common sorting algorithms. The tool gives a step by step animation of how arrays with values of varrying length are sorted in the following algorithms: Bubble Sort, Insertion Sort, Quick Sort, Merge Sort',
        tags: ['Python', 'JavaScript'],
        demo: 'https://sort.nisargshah.dev',
        github: 'https://github.com/Nisarg-S/Sorting-Algorithm-Visualizer'
    },
    {
        title: 'Stock Market Tracker',
        image: StockThumbnail,
        shortDescription: 'Python cronjob which tracks stocks across various world markets',
        longDescription: 'The Stock Market Tracker is a cronjob wirtten in Python which fetches stock data from the Yahooo Finance API and notifies its users when stocks on their watch list cross predefined threshold values.',
        tags: ['Python'],
        demo: false,
        github: 'https://github.com/Nisarg-S/Stock-Notifier'
    },
    {
        title: 'Carbon Footprint Tracker',
        image: FootprintThumbnail,
        shortDescription: 'A desktop app whicah can be used to montior and track a users total carbon footprint',
        longDescription: 'The Carbon Footprint Tracker is a python app made using the Tkinter GUI library used to log a persons daily activities(i.e travelling, leisure etc.) and calculate their CO2 emissions using the Cool Climate API',
        tags: ['Python'],
        demo: false,
        github: 'https://github.com/Nisarg-S/Carbon-Footprint-Tracker'
    }
]



export default projectDetails