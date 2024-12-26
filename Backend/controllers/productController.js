const client = require('../config/elasticsearch');

// Index a new product
exports.addProduct = async (req, res) => {
    try {
        console.log("Incoming Product Data: ", req.body);

        const result = await client.index({
            index: 'products',
            document: req.body,
        });

        console.log("Elasticsearch Response: ", result);
        res.status(201).json(result);
    } catch (error) {
        console.error("Elasticsearch Error: ", error);
        res.status(500).json({ error: error.message });
    }
};


// Search for products
exports.searchProducts = async (req, res) => {
    const { query, category, minPrice, maxPrice, sort } = req.query;

    const body = {
        query: {
            bool: {
                must: query ? { multi_match: { query, fields: ['name', 'description'] } } : {},
                filter: [
                    category ? { term: { category } } : {},
                    minPrice || maxPrice
                        ? { range: { price: { gte: minPrice || 0, lte: maxPrice || Infinity } } }
                        : {},
                ],
            },
        },
        sort: sort ? [{ [sort]: { order: 'asc' } }] : [],
    };

    try {
        const result = await client.search({
            index: 'products',
            body,
        });
        res.json(result.hits.hits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
