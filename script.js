document.getElementById("uploadButton").addEventListener("click", async () => {
    const imageInput = document.getElementById("imageInput");
    const result = document.getElementById("result");

    if (imageInput.files.length === 0) {
        result.textContent = "請先選擇一張圖片！";
        return;
    }

    const file = imageInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    result.textContent = "正在辨識中，請稍候...";

    try {
        // 呼叫 Hugging Face Spaces 或其他 API 進行藥品辨識
        const response = await fetch("https://your-api-endpoint.com/predict", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        result.textContent = `辨識結果：${data.result}`;
    } catch (error) {
        console.error(error);
        result.textContent = "辨識失敗，請稍後再試。";
    }
});
