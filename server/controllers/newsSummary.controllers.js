const ps = require('python-shell');
const pathToPython = path.join(__dirname, '../../newsfromlink.py');

link = 'https://economictimes.indiatimes.com/news/politics-and-nation/manohar-parrikars-sons-talk-about-continuing-his-legacy/articleshow/68646563.cms'

const options = {
    args: [
        link
    ]
};
await ps.PythonShell.run(pathToPython, options, async (err, voicedata) => {
    if (err) {
        console.log(err);
    }
    console.log(voicedata);
    console.log('I am inside the python shell!');
});