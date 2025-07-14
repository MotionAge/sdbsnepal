import { supabase } from "@/lib/database"

export const api = {
  // Blog functions
  async getBlogs() {
    const { data, error } = await supabase.from("blogs").select("*").order("created_at", { ascending: false })
    if (error) throw error
    return data || []
  },

  async getBlog(id: string) {
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async createBlog(blogData: any) {
    const { data, error } = await supabase.from("blogs").insert([blogData]).select().single()
    if (error) throw error
    return data
  },

  async updateBlog(id: string, blogData: any) {
    const { data, error } = await supabase.from("blogs").update(blogData).eq("id", id).select().single()
    if (error) throw error
    return data
  },

  async deleteBlog(id: string) {
    const { error } = await supabase.from("blogs").delete().eq("id", id)
    if (error) throw error
  },

  // Member functions
  async getMembers() {
    const { data, error } = await supabase.from("members").select("*").order("created_at", { ascending: false })
    if (error) throw error
    return data || []
  },

  async getMember(id: string) {
    const { data, error } = await supabase.from("members").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async createMember(memberData: any) {
    const { data, error } = await supabase.from("members").insert([memberData]).select().single()
    if (error) throw error
    return data
  },

  async updateMember(id: string, memberData: any) {
    const { data, error } = await supabase.from("members").update(memberData).eq("id", id).select().single()
    if (error) throw error
    return data
  },

  async deleteMember(id: string) {
    const { error } = await supabase.from("members").delete().eq("id", id)
    if (error) throw error
  },

  // Donation functions
  async getDonations() {
    const { data, error } = await supabase.from("donations").select("*").order("created_at", { ascending: false })
    if (error) throw error
    return data || []
  },

  async getDonation(id: string) {
    const { data, error } = await supabase.from("donations").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async createDonation(donationData: any) {
    const { data, error } = await supabase.from("donations").insert([donationData]).select().single()
    if (error) throw error
    return data
  },

  async updateDonation(id: string, donationData: any) {
    const { data, error } = await supabase.from("donations").update(donationData).eq("id", id).select().single()
    if (error) throw error
    return data
  },

  async deleteDonation(id: string) {
    const { error } = await supabase.from("donations").delete().eq("id", id)
    if (error) throw error
  },

  // Gallery functions
  async getGallery() {
    const { data, error } = await supabase.from("gallery").select("*").order("created_at", { ascending: false })
    if (error) throw error
    return data || []
  },

  async getGalleryItem(id: string) {
    const { data, error } = await supabase.from("gallery").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async createGalleryItem(itemData: any) {
    const { data, error } = await supabase.from("gallery").insert([itemData]).select().single()
    if (error) throw error
    return data
  },

  async updateGalleryItem(id: string, itemData: any) {
    const { data, error } = await supabase.from("gallery").update(itemData).eq("id", id).select().single()
    if (error) throw error
    return data
  },

  async deleteGalleryItem(id: string) {
    const { error } = await supabase.from("gallery").delete().eq("id", id)
    if (error) throw error
  },

  // Project functions
  async getProjects() {
    const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })
    if (error) throw error
    return data || []
  },

  async getProject(id: string) {
    const { data, error } = await supabase.from("projects").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async createProject(projectData: any) {
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          ...projectData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single()
    if (error) throw error
    return data
  },

  async updateProject(id: string, projectData: any) {
    const { data, error } = await supabase
      .from("projects")
      .update({
        ...projectData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  async deleteProject(id: string) {
    const { error } = await supabase.from("projects").delete().eq("id", id)
    if (error) throw error
  },

  // Library functions
  async getLibraryItems() {
    const { data, error } = await supabase.from("library").select("*").order("created_at", { ascending: false })
    if (error) throw error
    return data || []
  },

  async getLibraryItem(id: string) {
    const { data, error } = await supabase.from("library").select("*").eq("id", id).single()
    if (error) throw error
    return data
  },

  async createLibraryItem(itemData: any) {
    const { data, error } = await supabase.from("library").insert([itemData]).select().single()
    if (error) throw error
    return data
  },

  async updateLibraryItem(id: string, itemData: any) {
    const { data, error } = await supabase.from("library").update(itemData).eq("id", id).select().single()
    if (error) throw error
    return data
  },

  async deleteLibraryItem(id: string) {
    const { error } = await supabase.from("library").delete().eq("id", id)
    if (error) throw error
  },
}
