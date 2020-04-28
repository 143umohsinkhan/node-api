const resources = {};

exports.getResponse = function (posts, comments) {
    return posts.map(post => {
        return {
            "post_id": post.id,
            "post_title": post.title,
            "post_body": post.body,
            "total_number_of_comments": comments.filter(comment => comment.postId === post.id).length
        }
    }).sort((a, b) => a.total_number_of_comments - b.total_number_of_comments);
}

exports.getSearchResult = function (query, results) {

    let filterData = [];
    results.forEach((comment, index) => {
        if (mapAttributes(comment, query)) {
            filterData.push(results[index]);
        }
    })

    return filterData;
}


function mapAttributes(element, query) {
    let keys = Object.keys(query);
    let isMatch = true;
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (query[key] && typeof (query[key]) == "string") {
            isMatch = element[key].includes(query[key]);
            if (!isMatch) break;
        }
        if (query[key] && typeof (query[key]) == "number") {
            isMatch = element[key] = query[key];
            if (!isMatch)
                break;
        }
    }
    return isMatch;
}