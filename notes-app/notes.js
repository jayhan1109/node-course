const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const removedNotes = notes.filter((note) => note.title !== title);

  if (removedNotes.length < notes.length) {
    console.log(chalk.green.inverse("Note has been removed"));
    saveNotes(removedNotes);
  } else {
    console.log(chalk.red.inverse("Not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    console.log(chalk.red.inverse("Empty Notes"));
  } else {
    console.log(chalk.blue.inverse("========== Note List =========="));
    notes.forEach((note) =>
      console.log(
        "title: " + chalk.blue(note.title),
        "\t\tbody: " + chalk.blue(note.body)
      )
    );
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const targetNote = notes.find((note) => note.title === title);

  if (targetNote) {
    console.log(chalk.blue.inverse("========== Target Node =========="));
    console.log(
      "title: " + chalk.blue(targetNote.title),
      "\t\tbody: " + chalk.blue(targetNote.body)
    );
  } else {
    console.log(chalk.red.inverse("Not found"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNotes };
