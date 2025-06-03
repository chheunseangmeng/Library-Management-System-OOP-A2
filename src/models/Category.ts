import { CategoryType } from "./enum/CategoryType";

/**
 * Manages a category for organizing items such as books
 */
export class Category {
    static SCIENCE: CategoryType;
    static FICTION(FICTION: any) {
        throw new Error("Method not implemented.");
    }
    // Attributes
    private categoryId: number;
    private categoryName: string;
    private createdAt: Date;
    private updatedAt: Date;
    private description: string;
    private categoryType: CategoryType; // Corrected to single CategoryType enum

    /**
     * Creates a new Category instance
     * @param categoryId the unique identifier for the category
     * @param categoryName the name of the category
     * @param description the description of the category
     * @param categoryType the type of the category from CategoryType enum
     */
    constructor(categoryId: number, categoryName: string, description: string, categoryType: CategoryType) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
        this.categoryType = categoryType;
        this.createdAt = new Date(); // Automatically set to current date/time
        this.updatedAt = new Date(); // Automatically set to current date/time
    }

    /**
     * Creates a new category and logs the action
     * @returns the created category instance
     */
    public createCategory(): Category {
        // Logic to create a category (e.g., save to a database)
        console.log(`Creating category: ${this.categoryName}`);
        return this;
    }

    /**
     * Deletes a category and logs the action
     * @returns true if deletion is successful
     */
    public deleteCategory(): boolean {
        // Logic to delete a category (e.g., remove from a database)
        console.log(`Deleting category with ID: ${this.categoryId}`);
        return true; // Return true if deletion is successful
    }

    /**
     * Updates a category, sets the updated timestamp, and logs the action
     * @returns the updated category instance
     */
    public updateCategory(): Category {
        // Logic to update a category (e.g., update in a database)
        this.updatedAt = new Date(); // Update the updatedAt timestamp
        console.log(`Updating category: ${this.categoryName}`);
        return this;
    }

    /**
     * Retrieves a category by its ID
     * @param id the unique identifier of the category to retrieve
     * @returns the category instance if found, otherwise null
     */
    public getCategoryById(id: number): Category | null {
        // Logic to retrieve a category by ID (e.g., fetch from a database)
        if (this.categoryId === id) {
            console.log(`Found category with ID: ${id}`);
            return this;
        }
        return null; // Return null if not found
    }

    /**
     * Retrieves all categories
     * @returns an array of all category instances
     */
    public getAllCategories(): Category[] {
        // Logic to retrieve all categories (e.g., fetch from a database)
        console.log("Retrieving all categories");
        return [this]; // Return an array with this category as an example
    }

    /**
     * Gets the category ID
     * @returns the category ID
     */
    public getCategoryId(): number {
        return this.categoryId;
    }

    /**
     * Gets the category name
     * @returns the category name
     */
    public getCategoryName(): string {
        return this.categoryName;
    }

    /**
     * Gets the creation date of the category
     * @returns the creation date
     */
    public getCreatedAt(): Date {
        return this.createdAt;
    }

    /**
     * Gets the last updated date of the category
     * @returns the last updated date
     */
    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    /**
     * Gets the category description
     * @returns the category description
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * Gets the category type
     * @returns the category type from CategoryType enum
     */
    public getCategoryType(): CategoryType {
        return this.categoryType; // Added getter for categoryType
    }

    /**
     * Sets the category name and updates the timestamp
     * @param name the new name for the category
     */
    public setCategoryName(name: string): void {
        this.categoryName = name;
        this.updatedAt = new Date();
    }

    /**
     * Sets the category description and updates the timestamp
     * @param description the new description for the category
     */
    public setDescription(description: string): void {
        this.description = description;
        this.updatedAt = new Date();
    }

    /**
     * Sets the category type and updates the timestamp
     * @param categoryType the new category type from CategoryType enum
     */
    public setCategoryType(categoryType: CategoryType): void {
        this.categoryType = categoryType; // Corrected setter for categoryType
        this.updatedAt = new Date();
    }
}