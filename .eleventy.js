module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("toda_tags", function (collectionApi) {
    const pages = collectionApi.getFilteredByTag("artigos");
    const tagSet = new Set();
    for (const page of pages) {
      for (const tag of (page.data.tags || [])) {
        tagSet.add(tag);
      }
    }
    return [...tagSet].sort();
  });

  eleventyConfig.addFilter("filterByATag", function (collection=[], tag="") {
    return collection.filter(page => page.data.tags?.includes(tag));
  });

  eleventyConfig.addFilter("readableDate", function (date) {
    return new Date(date).toLocaleDateString();
  });

  return {
    dir: {
      input: "source",
      output: "www",
    }
  };
};
