const insert = document.getElementById('insert')


window.addEventListener('keydown', (e) => {
    console.log(e)
    insert.innerHTML = `<table>
    <tr>
      <th>code</th>
      <th>keyCode</th>
      <th>key</th>
    </tr>
    <tr>
      <td>${e.code}</td>
      <td>${e.keyCode}</td>
      <td>${e.key}</td>
    </tr>
  </table>`
})