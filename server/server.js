const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your MongoDB Atlas connection string
// const mongoUri = "mongodb+srv://yvonnesunyy:Ba0624676@cluster0.ymy3o3k.mongodb.net/yvonnesun?retryWrites=true&w=majority&appName=Cluster0";


// const client = new MongoClient(uri);
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected...');

    Blog.find({}).then(blogs => {
      console.log('Blogs found:', blogs);
    }).catch(err => {
      console.error('Error fetching blogs:', err);
    });

  })
  .catch(err => console.log('MongoDB connection error:', err));


const BlogSchema = new mongoose.Schema({
  name: {type: String, required: true},
  content: {type: String,required: true},
  createdAt:{type: Date, default: Date.now, immutable: true}
},{ 
    collection: 'Blog'
  }  );

const Blog = mongoose.model('Blog', BlogSchema);

app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });;
    res.json(blogs);
  } catch (err) {
    console.error('Error fetching blogs:', error);
    res.status(500).send('Server error');
  }
  
});

app.post('/api/blogs', async(req,res) =>{
    try{
        const newBlog = new Blog({
            name: req.body.name,
            content: req.body.content,
          });
        const savedBlog = await newBlog.save()
        console.log('Saved blog:', savedBlog)
        res.status(201).json(newBlog);
    } catch(err){
        console.error('Error creating blog:', err);
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
