function Answered(self, resp) {

    var question = self.parentElement;
    question.hidden = true;
    if (question.id == 'Question1') {
        if (resp)
            document.getElementById('Question2').hidden = false;
        else
            document.getElementById('Question3').hidden = false;
    }

    if (question.id == 'Question2') {
        if (resp)
            document.getElementById('Question4').hidden = false;
        else
            document.getElementById('Question5').hidden = false;
    }

    if (question.id == 'Question5' || question.id == 'Question4' || question.id == 'Question9') {
        document.getElementById('Question10').hidden = false;
    }

    if (question.id == 'Question3') {
        document.getElementById('Question6').hidden = false;
    }

    if (question.id == 'Question8' || question.id == 'Question7') {
        document.getElementById('Question9').hidden = false;
    }

    if (question.id == 'Question6') {
        if (resp)
            document.getElementById('Question7').hidden = false;
        else
            document.getElementById('Question8').hidden = false;
    }
}

window.onload = function () {
    var questions = document.getElementById('questions');

    var q = questions.getElementsByTagName('div');

    for (var index = 0; index < q.length; index++) {
        var element = q[index];
        if (element.id != 'Question1')
            element.hidden = true;
    }
}