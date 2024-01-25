document.getElementById('memoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the memo text
    var memo = document.getElementById('memo').value;

    // Save the memo to local storage
    var memos = JSON.parse(localStorage.getItem('memos')) || [];
    memos.push(memo);
    localStorage.setItem('memos', JSON.stringify(memos));

    // Clear the form
    document.getElementById('memo').value = '';
});