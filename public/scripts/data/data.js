const response = response => {
    if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
    }
    return response.json();
}

const responseJson = responseJson => {
    return Promise.resolve(responseJson);
}

class DataSource {
    data(category = "", page = 1) {
        return fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&page=${page}&apiKey=42d93d983c194372998d7e4d39727f7d`)
            .then(response)
            .then(responseJson)
            .catch(e => console.log(e))
            .finally(() => console.log("Data selesai dimuat."))
    }

    searchData(keyword = "canggih") {
        return fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=42d93d983c194372998d7e4d39727f7d`)
            .then(response)
            .then(responseJson)
            .catch(e => console.log(e))
            .finally(() => console.log("Pencarian data selesai."))
    }

    dataCovid() {
        return fetch(`http://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi`)
            .then(response)
            .then(responseJson)
            .catch(e => console.log(e))
            .finally(() => console.log("Data selesai dimuat."))
    }
}

export default DataSource;


// Jika terdapat pesan error dengan status 429, ganti apiKey dengan :
// apiKey 1 = 96af7f9749a743fb8a3dd669a8f23bc2      => used to Drive
// apiKey 2 = 8c267eded2ce47b185eae858a9c48213
// apiKey 3 = eb1f2ee097d34adcb63f07627cfafebf
// apiKey 4 = 8bb4019d7c7f4ba38035001c1e1541f5      => used for share
// apiKey 5 = 42d93d983c194372998d7e4d39727f7d