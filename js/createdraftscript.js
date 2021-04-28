const addParticipantBtn = document.querySelector('#add-participant')
let numParticipantInputs = 6;
addParticipantBtn.addEventListener('click', function(e) {
    numParticipantInputs++;
    const participantInputs = document.querySelector('#participant-inputs')
    const newInput = document.createElement('input')
    const newBr = document.createElement('br')
    newInput.placeholder = "Participant " + numParticipantInputs;
    participantInputs.append(newInput)
    participantInputs.append(newBr)
})