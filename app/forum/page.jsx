"use client";

import { useState, useEffect } from "react";
import styles from "./forumStyling.module.css";

export default function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    location: "",
    date: "",
    evidenceType: "audio",
    author: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: "Strange EVP at Old Changi Hospital",
        content: "Recorded this EVP during our investigation last weekend. Clear voice saying 'Get out' when no one was in the room.",
        location: "Singapore, Old Changi Hospital",
        date: "2024-10-15",
        evidenceType: "audio",
        author: "GhostHunterSG",
        upvotes: 24,
        comments: 8,
        timestamp: "3 days ago"
      },
      {
        id: 2,
        title: "Orb captured at Haw Par Villa",
        content: "Multiple orbs captured in the Hell's Museum section. They seemed to be following our group.",
        location: "Singapore, Haw Par Villa",
        date: "2024-10-10",
        evidenceType: "photo",
        author: "ParanormalExplorer",
        upvotes: 31,
        comments: 12,
        timestamp: "1 week ago"
      },
      {
        id: 3,
        title: "EMF spike at Pulau Ubin abandoned house",
        content: "Constant EMF spikes around 3am. REM Pod also triggered multiple times in same spot.",
        location: "Singapore, Pulau Ubin",
        date: "2024-10-05",
        evidenceType: "video",
        author: "IslandInvestigator",
        upvotes: 17,
        comments: 5,
        timestamp: "2 weeks ago"
      }
    ];
    setPosts(samplePosts);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.author) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newPostObj = {
        id: posts.length + 1,
        ...newPost,
        upvotes: 0,
        comments: 0,
        timestamp: "Just now"
      };
      
      setPosts([newPostObj, ...posts]);
      setNewPost({
        title: "",
        content: "",
        location: "",
        date: "",
        evidenceType: "audio",
        author: ""
      });
      setIsSubmitting(false);
      alert("Evidence submitted successfully!");
    }, 1000);
  };

  const handleUpvote = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, upvotes: post.upvotes + 1 } : post
    ));
  };

  const evidenceTypeColors = {
    audio: "#4CAF50",
    photo: "#2196F3",
    video: "#FF9800",
    text: "#9C27B0",
    other: "#795548"
  };

  const evidenceTypeLabels = {
    audio: "Audio Evidence",
    photo: "Photo Evidence",
    video: "Video Evidence",
    text: "Text/Story",
    other: "Other"
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Ghost Evidence Forum</h1>
        <p className={styles.subtitle}>
          Share and discuss paranormal evidence from Singapore and beyond
        </p>
      </div>

      <div className={styles.layout}>
        {/* Left Column - Post Form */}
        <div className={styles.leftColumn}>
          <div className={styles.postForm}>
            <h2 className={styles.formTitle}>Share Your Evidence</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  placeholder="Brief title of your evidence"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="content">Description *</label>
                <textarea
                  id="content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  placeholder="Describe your experience and evidence..."
                  rows="5"
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={newPost.location}
                    onChange={(e) => setNewPost({...newPost, location: e.target.value})}
                    placeholder="e.g., Singapore, Old Changi Hospital"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={newPost.date}
                    onChange={(e) => setNewPost({...newPost, date: e.target.value})}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="evidenceType">Evidence Type</label>
                  <select
                    id="evidenceType"
                    value={newPost.evidenceType}
                    onChange={(e) => setNewPost({...newPost, evidenceType: e.target.value})}
                  >
                    {Object.entries(evidenceTypeLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="author">Your Name/Nickname *</label>
                  <input
                    type="text"
                    id="author"
                    value={newPost.author}
                    onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                    placeholder="GhostHunterSG"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Evidence"}
              </button>
            </form>

            <div className={styles.guidelines}>
              <h3>Forum Guidelines:</h3>
              <ul>
                <li>Respect other users' experiences</li>
                <li>No fake evidence or hoaxes</li>
                <li>Provide as much context as possible</li>
                <li>Be skeptical but open-minded</li>
                <li>All evidence should be from personal experiences</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Posts List */}
        <div className={styles.rightColumn}>
          <div className={styles.filterBar}>
            <h3>Recent Evidence Posts</h3>
            <div className={styles.sortOptions}>
              <span>Sort by:</span>
              <select className={styles.sortSelect}>
                <option>Newest</option>
                <option>Most Upvoted</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          <div className={styles.postsList}>
            {posts.length === 0 ? (
              <div className={styles.noPosts}>
                <p>No evidence posts yet. Be the first to share!</p>
              </div>
            ) : (
              posts.map(post => (
                <div key={post.id} className={styles.postCard}>
                  <div className={styles.postHeader}>
                    <div className={styles.evidenceTag} 
                         style={{backgroundColor: evidenceTypeColors[post.evidenceType]}}>
                      {evidenceTypeLabels[post.evidenceType]}
                    </div>
                    <span className={styles.timestamp}>{post.timestamp}</span>
                  </div>
                  
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postContent}>{post.content}</p>
                  
                  <div className={styles.postMeta}>
                    <div className={styles.location}>
                      📍 {post.location || "Location not specified"}
                    </div>
                    <div className={styles.date}>
                      📅 {post.date || "Date not specified"}
                    </div>
                  </div>
                  
                  <div className={styles.postFooter}>
                    <div className={styles.authorInfo}>
                      👤 <span className={styles.authorName}>{post.author}</span>
                    </div>
                    <div className={styles.interactions}>
                      <button 
                        className={styles.upvoteButton}
                        onClick={() => handleUpvote(post.id)}
                      >
                        👍 Upvote ({post.upvotes})
                      </button>
                      <span className={styles.comments}>
                        💬 {post.comments} comments
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}