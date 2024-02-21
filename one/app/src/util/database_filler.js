import axios from "axios";

export function fillDatabase() {
    setTimeout((filler), 2000);
}

const filler = () => {
    // deleteEntities();
    createEntities();
}

const deleteEntities = () => {
    axios.delete("http://127.0.0.1:1111/chocolate_bar/")
        .then((response) => {
            // console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

    axios.delete("http://127.0.0.1:1111/tag/")
        .then((response) => {
            // console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

}

const createEntities = () => {
    axios.post("http://127.0.0.1:1111/chocolate_bar/create", {
        name: "ChocolateBar1",
        type: "Sweet",
        price: 220,
        amount: 1,
        isAvailable: true
    })
        .then((response) => {
            // console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

    axios.post("http://127.0.0.1:1111/tag/create", {
        name: "tag1"
    })
        .then((response) => {
            // console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

    axios.get("http://127.0.0.1:1111/chocolate_bar/1/1")
        .then((response) => {
            // console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
