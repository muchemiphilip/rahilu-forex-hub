import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PurchaseEmailRequest {
  email: string;
  name: string;
  products: Array<{
    name: string;
    price: string;
  }>;
  totalPrice: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, products, totalPrice }: PurchaseEmailRequest = await req.json();
    
    console.log("Sending purchase confirmation email to:", email);

    const productsHtml = products.map(product => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          ${product.name}
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">
          $${product.price}
        </td>
      </tr>
    `).join('');

    const emailResponse = await resend.emails.send({
      from: "Rahilu Forex Trading <onboarding@resend.dev>",
      to: [email],
      subject: "Purchase Confirmation - Rahilu Forex Trading",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .products-table { width: 100%; background: white; border-radius: 8px; overflow: hidden; margin: 20px 0; }
              .total { font-size: 24px; font-weight: bold; color: #667eea; text-align: right; margin-top: 20px; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Purchase!</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>Your payment has been successfully processed. Here's your order summary:</p>
                
                <table class="products-table">
                  <thead>
                    <tr style="background: #667eea; color: white;">
                      <th style="padding: 15px; text-align: left;">Product</th>
                      <th style="padding: 15px; text-align: right;">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${productsHtml}
                  </tbody>
                </table>
                
                <div class="total">
                  Total: $${totalPrice}
                </div>
                
                <p style="margin-top: 30px;">You will receive access details for your trading solutions within 24 hours.</p>
                <p>If you have any questions, please don't hesitate to contact our support team.</p>
                
                <p style="margin-top: 30px;">Best regards,<br><strong>Rahilu Forex Trading Team</strong></p>
              </div>
              <div class="footer">
                <p>This is an automated email. Please do not reply to this message.</p>
                <p>&copy; 2025 Rahilu Forex Trading. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-purchase-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
