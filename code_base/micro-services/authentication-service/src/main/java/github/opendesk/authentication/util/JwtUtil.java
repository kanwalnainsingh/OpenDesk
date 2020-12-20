package github.opendesk.authentication.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtUtil {

    private String SECRET_KEY = "secret";

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims.apply(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        return createToken(userDetails.getUsername());
    }

    private String createToken(String subject) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("orgId", "21");
        claims.put("empId", "889");

        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public Function<String, String> extractUsername = (token) -> extractClaim(token, Claims::getSubject);
    private Function<String, Date> extractExpiration = (token) -> extractClaim(token, Claims::getExpiration);
    private Function<String, Boolean> isTokenExpired = (token) -> extractExpiration.apply(token).before(new Date());
    private Function<String, Claims> extractAllClaims = (token) -> Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    public Function<String, Boolean> validateToken = (token) -> !isTokenExpired.apply(token);

}