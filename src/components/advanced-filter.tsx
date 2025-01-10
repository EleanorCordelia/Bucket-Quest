import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card } from "./ui/card"

export default function AdvancedFilter() {
  return (
    <section className="w-full max-w-4xl mx-auto py-6 md:py-6">
      <div className="px-4 md:px-6">
        <Card className="p-6">
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input id="keywords" placeholder="Enter keywords" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home">Home &amp; Garden</SelectItem>
                    <SelectItem value="beauty">Beauty &amp; Personal Care</SelectItem>
                    <SelectItem value="sports">Sports &amp; Outdoors</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price-range">Price Range</Label>
                <div className="flex items-center gap-4">
                  <Input id="price-range-min" type="number" placeholder="Min" />
                  <span>-</span>
                  <Input id="price-range-max" type="number" placeholder="Max" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sort-by">Sort By</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sort option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Search
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}