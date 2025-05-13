const db = new PouchDB('Finances');
const form = document.getElementById('RecordForm');
const list = document.getElementById('RecordList');
const TotalDaily = document.getElementById('DailySum');
const Total = document.getElementById('TotalSum');

form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const desc = document.getElementById('Description').value;
    const value = document.getElementById('Value').value;
    const recordType = document.getElementById('Type').value;
    const date = new Date().toDateString().slice(0,10);

    const doc ={
        _id: new Date().toDateString(),
        desc,value,recordType,date
    };

    await db.put(doc);
    form.reset();
    refresh();

}
);

async function refresh(){
    const res =await db.allDocs({include_docs : true,descending :true});
}
refresh();
