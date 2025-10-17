export default function FindIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const stringIndex = stringArray1.findIndex(a => a === 'string3');
    return (
        <div id="wd-find-index">
            <h4>Find Index</h4>
            four Index = {fourIndex} <br />
            string Index = {stringIndex} <hr />
        </div>
    )
}