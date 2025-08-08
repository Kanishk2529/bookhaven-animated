import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";

// Mock data for featured books
const featuredBooks = [
  {
    id: 1,
    title: "The Psychology of Programming",
    author: "Gerald M. Weinberg",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 124,
    category: "Programming",
    format: "Paperback",
    coverColor: "bg-blue-500",
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 34.99,
    rating: 4.9,
    reviews: 892,
    category: "Programming",
    format: "eBook",
    coverColor: "bg-green-500",
    badge: "New"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 24.99,
    rating: 4.7,
    reviews: 1256,
    category: "Self-Help",
    format: "Hardcover",
    coverColor: "bg-purple-500",
    badge: "Popular"
  },
  {
    id: 4,
    title: "The Art of War",
    author: "Sun Tzu",
    price: 19.99,
    rating: 4.6,
    reviews: 567,
    category: "Philosophy",
    format: "Paperback",
    coverColor: "bg-red-500"
  }
];

export const FeaturedBooks = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Featured Collection
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trending Books This Week
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular books our readers are loving right now
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book, index) => (
            <Card
              key={book.id}
              className={`book-card cursor-pointer group animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <CardContent className="p-0">
                {/* Book Cover */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-t-lg overflow-hidden">
                  {/* Mock Book Cover */}
                  <div className={`w-full h-full ${book.coverColor} flex items-center justify-center relative`}>
                    <div className="text-white text-center p-4">
                      <div className="text-lg font-bold mb-2 line-clamp-2">
                        {book.title}
                      </div>
                      <div className="text-sm opacity-90">
                        {book.author}
                      </div>
                    </div>
                    
                    {/* Badge */}
                    {book.badge && (
                      <Badge 
                        className="absolute top-2 left-2 bg-primary text-primary-foreground"
                      >
                        {book.badge}
                      </Badge>
                    )}

                    {/* Hover Actions */}
                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${
                      hoveredBook === book.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="p-4">
                  {/* Category and Format */}
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {book.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {book.format}
                    </span>
                  </div>

                  {/* Title and Author */}
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    by {book.author}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(book.rating)
                              ? 'text-primary fill-current'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {book.rating} ({book.reviews})
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">
                        ${book.price}
                      </span>
                      {book.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${book.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="h-8">
                      <ShoppingCart className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/books">
            <Button variant="outline" size="lg">
              View All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};