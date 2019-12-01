<script>
    $(document).ready(function () {
        $('#removeModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
            var title = button.data('title') // 使用 data-* 來取得特定內容

            var modal = $(this)
            modal.find('.modal-title').text('確認' + title) // 寫入資料
        })
    });

    $('myList').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
</script>



<script>
    $(function () {
        $('#myList a:last-child').tab('show')
    })
</script>

//bootstrap使用按鈕連結網頁js

<script type="text/javascript">
    function openWin(userid, audioid) {
        var obj = document.getElementById("DownLoadAudio");
        obj.href = data.state;
        obj.click();
    }
</script>
// 刪除 Modal 的script
<script>
    $(document).ready(function () {


        // 編輯的 Modal 事件 當#editModal被點擊必須去找到是哪一個btn去觸發,並將這個btn的deta title屬性取出來,寫在modal-title地方
        $('#removeModal').on('show.bs.modal', function (event) {
            var btn = $(event.relatedTarget);

            var title = btn.data('title')

            var model = $(this);
            model.find('.modal-title').text('確認刪除' + title)// '文字'+title=在title前面加上文字
        });

        $('#removeModal').on('show.bs.modal', function (event) {

        })
    });
</script>

//Portfolio Gallery with Filtering切換不同分類照片
<script>
    filterSelection("all")
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("column");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }


    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });

        document.querySelector('.list-group-category').addEventListener('click', function(e) {
    if (e.target.nodeName == 'A') {
      filterSelection("all")
    }
  })
    }
</script>
