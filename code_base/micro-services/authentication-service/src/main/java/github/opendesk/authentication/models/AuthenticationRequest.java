package github.opendesk.authentication.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@AllArgsConstructor
@Builder
@Getter
@Setter
public class AuthenticationRequest implements Serializable {
    private String username;
    private String password;
    public AuthenticationRequest() {}
}
