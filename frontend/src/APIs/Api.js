const baseURLObject = {
    baseURL: undefined
}

const fetchFromGithub = async (gitFileURL) => {
    let response = await fetch(gitFileURL)
    let fileData = await response.text()
    baseURLObject.baseURL = fileData
    return fileData
}

fetchFromGithub("https://raw.githubusercontent.com/rokamoto30/PEP2-2/master/frontend/src/APIs/automation/baseURL.txt")

export default baseURLObject;