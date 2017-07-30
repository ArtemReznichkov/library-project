'use strict';

class Note {
    constructor(db) {
        this.db = db;
    }
    
    getNotes() {
        return new Promise((resolve, reject) => {
            let allNotes = [];
            let allNotesCursor = this.db.collection('notes').find();
              allNotesCursor.each(function(err, doc) {
              if(doc === null) {
                resolve(allNotes);
              } else{
                allNotes.push({text: doc.text, date: doc.date});
              }
            });
        });
    }
    
    addNote(note) {
        return new Promise((resolve, reject) => {
            this.db.collection('notes').insert(note);
            resolve({text: note.text, date: note.date});
        });
    }
    
    deleteNote(note) {
        return new Promise((resolve, reject) => {
            this.db.collection('notes').deleteOne(note);
            resolve({text: note.text, date: note.date});
        });
    }
}

module.exports = Note;