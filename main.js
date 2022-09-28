
function main() {
    const profile_url = "https://raw.githubusercontent.com/zi5t0/profile/main/profile.json";
    fetch(profile_url)
        .then((response) => response.json())
        .then((profile) => {
            console.log(profile);
            /* document.write('<img src="'+profile.profile_img+'">'); */
        });
}


main();

