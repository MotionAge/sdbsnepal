export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string | null
          role: "user" | "admin"
          avatar_url: string | null
          accept_newsletter: boolean
          email_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name: string
          phone?: string | null
          role?: "user" | "admin"
          avatar_url?: string | null
          accept_newsletter?: boolean
          email_verified?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string | null
          role?: "user" | "admin"
          avatar_url?: string | null
          accept_newsletter?: boolean
          email_verified?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      email_verifications: {
        Row: {
          id: string
          user_id: string
          email: string
          otp_code: string
          expires_at: string
          verified_at: string | null
          attempts: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          email: string
          otp_code: string
          expires_at: string
          verified_at?: string | null
          attempts?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          email?: string
          otp_code?: string
          expires_at?: string
          verified_at?: string | null
          attempts?: number
          created_at?: string
        }
      }
      campaigns: {
        Row: {
          id: string
          title: string
          description: string
          content: string | null
          goal_amount: number
          raised_amount: number
          currency: string
          location: string | null
          deadline: string | null
          category: string
          status: "draft" | "active" | "paused" | "completed" | "cancelled"
          featured: boolean
          image_url: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          content?: string | null
          goal_amount: number
          raised_amount?: number
          currency?: string
          location?: string | null
          deadline?: string | null
          category: string
          status?: "draft" | "active" | "paused" | "completed" | "cancelled"
          featured?: boolean
          image_url?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          content?: string | null
          goal_amount?: number
          raised_amount?: number
          currency?: string
          location?: string | null
          deadline?: string | null
          category?: string
          status?: "draft" | "active" | "paused" | "completed" | "cancelled"
          featured?: boolean
          image_url?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      donations: {
        Row: {
          id: string
          user_id: string | null
          campaign_id: string | null
          amount: number
          currency: string
          payment_method: string
          payment_intent_id: string | null
          transaction_id: string | null
          status: "pending" | "completed" | "failed" | "refunded"
          donor_name: string | null
          donor_email: string | null
          donor_message: string | null
          is_anonymous: boolean
          receipt_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          campaign_id?: string | null
          amount: number
          currency?: string
          payment_method: string
          payment_intent_id?: string | null
          transaction_id?: string | null
          status?: "pending" | "completed" | "failed" | "refunded"
          donor_name?: string | null
          donor_email?: string | null
          donor_message?: string | null
          is_anonymous?: boolean
          receipt_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          campaign_id?: string | null
          amount?: number
          currency?: string
          payment_method?: string
          payment_intent_id?: string | null
          transaction_id?: string | null
          status?: "pending" | "completed" | "failed" | "refunded"
          donor_name?: string | null
          donor_email?: string | null
          donor_message?: string | null
          is_anonymous?: boolean
          receipt_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          category: string
          tags: string[] | null
          status: "draft" | "published" | "archived"
          featured_image_url: string | null
          author_id: string | null
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          category: string
          tags?: string[] | null
          status?: "draft" | "published" | "archived"
          featured_image_url?: string | null
          author_id?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          category?: string
          tags?: string[] | null
          status?: "draft" | "published" | "archived"
          featured_image_url?: string | null
          author_id?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          subject: string
          message: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          status?: string
          created_at?: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          subscribed_at: string
          unsubscribed_at: string | null
          is_active: boolean
        }
        Insert: {
          id?: string
          email: string
          subscribed_at?: string
          unsubscribed_at?: string | null
          is_active?: boolean
        }
        Update: {
          id?: string
          email?: string
          subscribed_at?: string
          unsubscribed_at?: string | null
          is_active?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: "user" | "admin"
      donation_status: "pending" | "completed" | "failed" | "refunded"
      campaign_status: "draft" | "active" | "paused" | "completed" | "cancelled"
      blog_status: "draft" | "published" | "archived"
    }
  }
}
