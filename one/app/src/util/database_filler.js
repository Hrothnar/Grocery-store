import axios from "axios";

export function fillDatabase(request, response) {
    setTimeout((filler), 500);
    response.send("Databases have been filled up with the data! You may continue an interaction with the application");
}

const filler = () => {
    deleteEntities();
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
    for (let i = 1; i <= 2; i++) {
        axios.post("http://127.0.0.1:1111/chocolate_bar/create", {
            name: `ChocolateBar${i}`,
            category: "Chocolate",
            price: 30 * i,
            amount: i,
            isAvailable: true
        })
            .then((response) => {
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    axios.post("http://127.0.0.1:1111/tag/create", {
        name: "tag1"
    })
        .then((response) => {
            // console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    axios.get("http://127.0.0.1:1111/chocolate_bar/1/1")
        .then((response) => {
            // console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });


    axios.post("http://127.0.0.1:1111/customer/create", {
        name: "Tom",
        isActive: true
    })
        .then((response) => {
            // console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}
